import { faBuilding, faScrewdriverWrench, faToolbox, faUserGroup, faUserPen } from "@fortawesome/free-solid-svg-icons";
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from "@techiediaries/ngx-qrcode";
import { UserRoles } from "../enums/User-roles.enum";

export class AppConstants {
    public static readonly MENU_ITEMS = [
        {
            title: 'Salida de equipos y herramienta',
            icon: faToolbox,
            path: 'tools-output',
            userRoles: [UserRoles.AppAdmin, UserRoles.CompanyAdmin, UserRoles.ToolsAdmin, UserRoles.ToolsUser]
        },
        {
            title: 'Administración de equipos y herramienta',
            icon: faScrewdriverWrench,
            path: 'tools-management',
            userRoles: [UserRoles.AppAdmin, UserRoles.CompanyAdmin, UserRoles.ToolsAdmin, UserRoles.ToolsUser]
        },
        {
            title: 'Administración de usuarios',
            icon: faUserGroup,
            path: 'users-management',
            userRoles: [UserRoles.AppAdmin, UserRoles.CompanyAdmin, UserRoles.UsersAdmin, UserRoles.UsersUser]
        },
        {
            title: 'Clientes',
            icon: faBuilding,
            path: 'customers',
            userRoles: [UserRoles.AppAdmin, UserRoles.CompanyAdmin, UserRoles.CustomersAdmin, UserRoles.CustomersUser]
        },
        {
            title: 'Editar perfil',
            icon: faUserPen,
            path: 'profile',
            userRoles: null
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
    public static readonly usersManagement = 'users-management';
}

export class ApiConstants {
    public static readonly workOrderApi = "WorkOrder";
    public static readonly workItemApi = "WorkItem";
    public static readonly workItemActivityLogApi = "WorkItem/workItemActivityLog";
    public static readonly customersApi = "Customers";
    public static readonly userApi = "Users";
    public static readonly addUserApi = "Users/addUser";
    public static readonly userRolesApi = "UserRole";
    public static readonly userEmployeeApi = "Users/employee";
    public static readonly userEmployeesApi = "Users/employees";
    public static readonly equipmentApi = "Equipment";
    public static readonly equipmentParametersApi = "Equipment/parameters";
    public static readonly measurementUnitsApi = "MeasurementUnits";
    public static readonly workItemTypesApi = "WorkItem/workItemTypes";
}

export class ErrorConstants {
    public static readonly equipmentParameterWrongValue = "No se ha ingresado un valor válido para el parámetro";
}