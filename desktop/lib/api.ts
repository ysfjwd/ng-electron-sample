import { RxHR } from '@akanass/rx-http-request';
import { Category, Configuration, Discount, Item, Outlet, Section } from '@reaction/common/models';
import { Observable, of as observableOf } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { configStore, dataStore } from './store';

export const getConfiguration: () => Configuration = () => configStore.get('configuration');
export const getHeaders = () => ({ 'API-KEY': getConfiguration().api_key });

export const getOutlet: () => Observable<Outlet> = () => {
  const outlet = dataStore.get('outlet', null);

  if (!outlet || new Date().getTime() - new Date(outlet.udpated_at).getTime() > 1000 * 60 * 60 * 2) {
    const config = getConfiguration();
    const url = `${config.api_gateway}/outlets/outlets/${config.outlet_id}/`;
    const headers = getHeaders();

    return RxHR.get<Outlet>(url, { headers, json: true }).pipe(
      map(response => response.body),
      tap(data => dataStore.set('outlet', { data, udpated_at: new Date() })),
      catchError(error => observableOf(<Outlet>outlet.data)),
    );
  } else {
    return observableOf(<Outlet>outlet.data);
  }
};

export function getForOutlet<T>(endpointName: string): Observable<T> {
  const data = dataStore.get(endpointName, null);

  if (!data || new Date().getTime() - new Date(data.updated_at).getTime() > 1000 * 60 * 60 * 2) {
    const config = getConfiguration();
    const url = `${config.api_gateway}/outlets/outlets/${config.outlet_id}/${endpointName}/`;
    const headers = getHeaders();

    return RxHR.get<T>(url, {
      headers,
      json: true,
    }).pipe(
      map(response => response.body),
      tap(reponnse => dataStore.set(endpointName, { reponnse, udpated_at: new Date() })),
      catchError<T, T>(() => observableOf<T>(data.data)),
    );
  } else {
    return observableOf<T>(data.data);
  }
}
