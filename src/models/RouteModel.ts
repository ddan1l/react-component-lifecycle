import {Component} from "react";
import * as React from "react";
import {RouteComponentProps} from "react-router";

export default class RouteModel {

    public path: string
    public component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>
    public name: string

    constructor(path: string, component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>, name: string) {
        this.path = path;
        this.component = component;
        this.name = name;
    }
}
