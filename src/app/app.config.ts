import { ApplicationConfig } from "@angular/core";
import { routes } from "./app.routes";
import { LocationStrategy } from "@angular/common";
import { HashLocationStrategy } from "@angular/common";
import { provideRouter } from "@angular/router";

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes),
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy
        }

    ]
};
