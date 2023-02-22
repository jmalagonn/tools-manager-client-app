import { faBuilding, faScrewdriverWrench, faToolbox, faUserGroup, faUserPen } from "@fortawesome/free-solid-svg-icons";
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from "@techiediaries/ngx-qrcode";

export class AppConstants {
    public static readonly MENU_ITEMS = [
        {
            title: 'Salida de equipos y herramienta',
            icon: faToolbox,
            path: 'tools-output'
        },
        {
            title: 'Administración de equipos y herramienta',
            icon: faScrewdriverWrench,
            path: 'tools-management'
        },
        {
            title: 'Administración de usuarios',
            icon: faUserGroup,
            path: 'users-management'
        },
        {
            title: 'Clientes',
            icon: faBuilding,
            path: 'customers'
        },
        {
            title: 'Editar perfil',
            icon: faUserPen,
            path: 'profile'
        },
    ];
    public static readonly itemsListDefault = ['Id', 'Nombre'];
}

export class QRConstants {
    public static readonly QRElementType = NgxQrcodeElementTypes.IMG;
    public static readonly QRCorrectionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
}

export class RouteConstants {
    public static readonly workItemPath = 'customers/work-item';
    public static readonly workOrderPath = 'customers/work-order';
    public static readonly equipmentPath = 'customers/equipment';
    public static readonly customersPath = 'customers/customer';
    public static readonly branchPath = 'branch';
}

export class ApiConstants {
    public static readonly workOrderApi = "WorkOrder";
    public static readonly workItemApi = "WorkItem";
    public static readonly workItemActivityLogApi = "WorkItem/workItemActivityLog";
}