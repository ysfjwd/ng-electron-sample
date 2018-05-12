import { ipcMain, Event } from 'electron';
import { configStore, dataStore } from './store';
import { getOutlet, getShifts, getDiscounts } from './api';
import { ConfigActionTypes, Configuration } from '@reaction/common/models/config';
import { ShiftActionTypes, Shift } from '@reaction/common/models/shift';

const FB_CONFIG = {
  outlet_id: '',
  local_gateway: '',
  api_key: '',
  api_gateway: '',
};

/**
 * Configuration Ipc Events
 */

ipcMain.on(ConfigActionTypes.GetConfigFromElectron, (event: Event) => {
  event.sender.send(ConfigActionTypes.GetConfigDone, configStore.get('configuration', FB_CONFIG));
});

ipcMain.on(ConfigActionTypes.SaveConfigToElectron, (event: Event, payload: Configuration) => {
  configStore.set('configuration', payload);
  event.sender.send(ConfigActionTypes.SaveConfigDone, payload);
});

/**
 * Shift Ipc Events
 */

ipcMain.on(ShiftActionTypes.LoadAllShifts, (event: Event) => {
  let shifts = dataStore.get('shifts', { last_updated: null, data: [] });
  console.log(new Date().getTime() - new Date(shifts.last_updated).getTime());
  // This updates shifts in the background if the last update is more than 2 hours;
  if (!shifts.last_updated || new Date().getTime() - new Date(shifts.last_updated).getTime() > 1000 * 60 * 60 * 2) {
    getShifts().subscribe(response => {
      if (response.response.statusCode === 200) {
        shifts = { last_updated: new Date(), data: response.body };
        dataStore.set('shifts', shifts);
        event.sender.send(ShiftActionTypes.LoadAllShiftsDone, shifts.data);
      }
    });
  }
  event.sender.send(ShiftActionTypes.LoadAllShiftsDone, shifts.data);
});
