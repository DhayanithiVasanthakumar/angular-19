import { Routes } from '@angular/router';
import { Admin } from '../components/admin/admin';
import { DataBinding } from '../components/data-binding/data-binding';
import { NgClass } from '../components/ng-class/ng-class';
import { ControlFlowStatement } from '../components/control-flow-statement/control-flow-statement';
import { Signal } from '../components/signal/signal';

export const routes: Routes = [
    //default route
    {
        path: '',
        redirectTo:"databinding",
        pathMatch: 'full'
    },
    //namba create pana component  ku routing set panarom
    {
        path:'admin',
        component: Admin
    },
    {
        path:'databinding',
        component:DataBinding
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
    }
];
