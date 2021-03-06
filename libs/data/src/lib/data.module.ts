import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { VendorModule } from '@reaction/vendor';
import { ElectronService } from 'ngx-electron';
import {
  CategoryService,
  ConfigService,
  DiscountService,
  IpcService,
  ProductService,
  OutletService,
  SectionService,
  ShiftService,
} from './services';
import { IpcReceiverService } from './services/ipc-io/ipc-receiver.service';
import { IpcSenderService } from './services/ipc-io/ipc-sender.service';
import { categoriesReducer } from './state/categories/categories.reducer';
import { CategoryEffects } from './state/categories/categories.effects';
import { ConfigEffects } from './state/config/config.effects';
import { configReducer } from './state/config/config.reducer';
import { DiscountsEffects } from './state/discounts/discounts.effects';
import { discountsReducer } from './state/discounts/discounts.reducer';
import { InvoicesEffects } from './state/invoices/invoices.effects';
import { invoicesReducer } from './state/invoices/invoices.reducer';
import { OrdersEffects } from './state/orders/orders.effects';
import { ordersReducer } from './state/orders/orders.reducer';
import { OutletEffects } from './state/outlet/outlet.effects';
import { outletReducer } from './state/outlet/outlet.reducer';
import { ProductEffects } from './state/products/products.effects';
import { productsReducer } from './state/products/products.reducer';
import { SectionsEffects } from './state/sections/sections.effects';
import { sectionsReducer } from './state/sections/sections.reducer';
import { ShiftsEffects } from './state/shifts/shifts.effects';
import { shiftsReducer } from './state/shifts/shifts.reducer';
import { OrderByPipe } from './pipes/order-by.pipe';

@NgModule({
  imports: [
    CommonModule,
    VendorModule,
    StoreModule.forFeature('categories', categoriesReducer),
    EffectsModule.forFeature([CategoryEffects]),
    StoreModule.forFeature('config', configReducer),
    EffectsModule.forFeature([ConfigEffects]),
    StoreModule.forFeature('discounts', discountsReducer),
    EffectsModule.forFeature([DiscountsEffects]),
    StoreModule.forFeature('products', productsReducer),
    EffectsModule.forFeature([ProductEffects]),
    StoreModule.forFeature('orders', ordersReducer),
    EffectsModule.forFeature([OrdersEffects]),
    StoreModule.forFeature('outlet', outletReducer),
    EffectsModule.forFeature([OutletEffects]),
    StoreModule.forFeature('shifts', shiftsReducer),
    EffectsModule.forFeature([ShiftsEffects]),
    StoreModule.forFeature('invoices', invoicesReducer),
    EffectsModule.forFeature([InvoicesEffects]),
    StoreModule.forFeature('sections', sectionsReducer),
    EffectsModule.forFeature([SectionsEffects]),
  ],
  exports: [OrderByPipe],
  providers: [
    CategoryEffects,
    CategoryService,
    ConfigEffects,
    ConfigService,
    DiscountsEffects,
    DiscountService,
    ElectronService,
    InvoicesEffects,
    IpcReceiverService,
    IpcSenderService,
    IpcService,
    OrdersEffects,
    OutletEffects,
    OutletService,
    ProductEffects,
    ProductService,
    SectionsEffects,
    SectionService,
    ShiftsEffects,
    ShiftService,
  ],
  declarations: [OrderByPipe],
})
export class DataModule {}
