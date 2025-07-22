import { Routes } from '@angular/router';
import { Admin } from '../components/admin/admin';
import { DataBinding } from '../components/data-binding/data-binding';
import { NgClass } from '../components/ng-class/ng-class';
import { ControlFlowStatement } from '../components/control-flow-statement/control-flow-statement';
import { Signal } from '../components/signal/signal';
import { LinkedSignal } from '../components/linked-signal/linked-signal';
import { NgFor } from '../components/ng-for/ng-for';
import { NgIf } from '../components/ng-if/ng-if';
import { NgStyle } from '../components/ng-style/ng-style';
import { User } from '../components/user/user';
import { TemplateForm } from '../components/template-form/template-form';
import { ReactiveForm } from '../components/reactive-form/reactive-form';
import { GetApi } from '../components/API/get-api/get-api';
import { PostApi } from '../components/API/post-api/post-api';
import { ResourceApi } from '../components/resource-api/resource-api';
import { Customer } from '../components/API/customer/customer';
import { LifeCycle } from '../components/life-cycle/life-cycle';
import { Login } from '../components/login/login';
import { Layout } from '../components/layout/layout';
import { NgTempNgContainer } from '../components/ng-temp-ng-container/ng-temp-ng-container';

export const routes: Routes = [
    //default route
    {
        path: '',
        redirectTo:"login",
        pathMatch: 'full'
    },
    //namba create pana component ku routing set panarom
    {
        path:'login',
        component:Login

    },
    {
        path:'',
        component:Layout,
        children:[
            {
        path:'user',
        component:User
    },
   
    {
        path:'admin',
        component: Admin
    },
    {
        path:'databinding',
        component:DataBinding
    },
    {
        path:'ngIf',
        component:NgIf
    },
    {
        path:'ngStyle',
        component:NgStyle
    },
    {
        path:'ngFor',
        component:NgFor
    },
    {
        path:'ngclass',
        component:NgClass
    },
    {
        path:"controlFlow",
        component:ControlFlowStatement
    },
    {
        path: 'signal',
        component:Signal
    },
    {
        path:'linkedSignal',
        component:LinkedSignal
    },
    {
        path:'templateForm',
        component:TemplateForm
    },
    {
        path:'reactiveForm',
        component:ReactiveForm
    },
    {
        path:'get-api',
        component:GetApi
    },
    {
        path:'post-api',
        component:PostApi
    },
    {
        path:'resource-api',
        component:ResourceApi
    },
    {
        path:"customer-component",
        component:Customer
    },
    {
        path:"life-cycle",
        component:LifeCycle
    },
    {
        path:"ngTempContainer",
        component:NgTempNgContainer
    }
        ]
    },
    
];
