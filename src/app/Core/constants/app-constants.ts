import { faBuilding, faScrewdriverWrench, faUserGroup, faUserPen, faGear } from "@fortawesome/free-solid-svg-icons";
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from "@techiediaries/ngx-qrcode";
import { UserRoles } from "../enums/User-roles.enum";

export class AppConstants {
    public static readonly MENU_ITEMS = [
        {
            title: 'Clientes',
            icon: faBuilding,
            path: 'customers',
            userRoles: [UserRoles.AppAdmin, UserRoles.CompanyAdmin, UserRoles.CustomersAdmin, UserRoles.CustomersUser]
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
            title: 'Editar perfil',
            icon: faUserPen,
            path: 'profile',
            userRoles: null
        },
        {
            title: 'Configuración general',
            icon: faGear,
            path: 'general-settings',
            userRoles: [UserRoles.AppAdmin, UserRoles.CompanyAdmin]
        },
    ];
    public static readonly itemsListDefault = ['Id', 'Nombre'];
    public static readonly noEquipmentParametersFound = "No se han configurado parámetros para el equipo.";
    public static readonly appName = "Nombre";
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
    public static readonly toolsPath = "tools-management";
    public static readonly addToolPath = "add-tool";
    public static readonly toolOutput = "tool-output";
}

export class ErrorConstants {
    public static readonly equipmentParameterWrongValue = "No se ha ingresado un valor válido para el parámetro";
    public static readonly parameterAlreadyExists = "El parámetro para el equipo ya existe.";
    public static readonly atLeastOneActivityLogMusBeAdded = "Debe agregar al menos un trabajo realizado.";
}