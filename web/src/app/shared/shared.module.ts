import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatToolbarModule } from "@angular/material/toolbar";
import { HeaderComponent } from "./components/header/header.component";

const COMPONENTS = [HeaderComponent];

@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule, MatProgressSpinnerModule, MatToolbarModule],
  exports: [COMPONENTS],
})
export class SharedModule {}
