import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  template: `<mat-toolbar class="toolbar">
    <img src="../../assets/jira-logo-scaled.png" class="logo-img" alt="image" />
  </mat-toolbar> `,
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
