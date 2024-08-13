"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueTypeTitleMap = exports.EIssueType = exports.CategoryTitleMap = exports.ECategory = void 0;
var ECategory;
(function (ECategory) {
    ECategory[ECategory["UX_UI"] = 1] = "UX_UI";
    ECategory[ECategory["MANAGEABILITY"] = 2] = "MANAGEABILITY";
    ECategory[ECategory["UPGRADABILITY"] = 3] = "UPGRADABILITY";
    ECategory[ECategory["SECURITY"] = 4] = "SECURITY";
    ECategory[ECategory["PERFORMANCE"] = 5] = "PERFORMANCE";
})(ECategory || (exports.ECategory = ECategory = {}));
exports.CategoryTitleMap = {
    [ECategory.UX_UI]: "UX and UI",
    [ECategory.MANAGEABILITY]: "Manageability",
    [ECategory.UPGRADABILITY]: "Upgradability",
    [ECategory.SECURITY]: "Security",
    [ECategory.PERFORMANCE]: "Performance"
};
var EIssueType;
(function (EIssueType) {
    EIssueType[EIssueType["SLOW_QUERIES"] = 1] = "SLOW_QUERIES";
    EIssueType[EIssueType["LARGE_TABLES"] = 2] = "LARGE_TABLES";
    EIssueType[EIssueType["LONG_TITLES"] = 3] = "LONG_TITLES";
    EIssueType[EIssueType["GLOBAL_UI_SCRIPTS"] = 4] = "GLOBAL_UI_SCRIPTS";
    EIssueType[EIssueType["ACL"] = 5] = "ACL";
    EIssueType[EIssueType["BUSY_FORMS"] = 6] = "BUSY_FORMS";
    EIssueType[EIssueType["SLOW_SCRIPTS"] = 7] = "SLOW_SCRIPTS";
    EIssueType[EIssueType["DATABASE_LOOKUPS_IN_ACCESS_CONTROL_RULES"] = 8] = "DATABASE_LOOKUPS_IN_ACCESS_CONTROL_RULES";
    EIssueType[EIssueType["GLOBAL_BUSINESS_RULES"] = 9] = "GLOBAL_BUSINESS_RULES";
    EIssueType[EIssueType["INSTANCE_ERROR_LOGS"] = 10] = "INSTANCE_ERROR_LOGS";
    EIssueType[EIssueType["LONG_RUNNING_REPORTS"] = 11] = "LONG_RUNNING_REPORTS";
    EIssueType[EIssueType["DUPLICATE_SCRIPT_INCLUDES"] = 12] = "DUPLICATE_SCRIPT_INCLUDES";
    EIssueType[EIssueType["DUPLICATE_FIELDS"] = 13] = "DUPLICATE_FIELDS";
    EIssueType[EIssueType["SCRIPT_INCLUDE_REPORTS"] = 14] = "SCRIPT_INCLUDE_REPORTS";
    EIssueType[EIssueType["TOO_MANY_CHOICES"] = 15] = "TOO_MANY_CHOICES";
})(EIssueType || (exports.EIssueType = EIssueType = {}));
;
exports.IssueTypeTitleMap = {
    [EIssueType.SLOW_QUERIES]: "Slow Queries",
    [EIssueType.LARGE_TABLES]: "Large Tables",
    [EIssueType.LONG_TITLES]: "Long Titles",
    [EIssueType.GLOBAL_UI_SCRIPTS]: "Global UI Scripts",
    [EIssueType.ACL]: "ACLs",
    [EIssueType.BUSY_FORMS]: "Busy Forms",
    [EIssueType.SLOW_SCRIPTS]: "Slow Scripts",
    [EIssueType.DATABASE_LOOKUPS_IN_ACCESS_CONTROL_RULES]: "Database Lookups in Access Control Rules",
    [EIssueType.GLOBAL_BUSINESS_RULES]: "Global Business Rules",
    [EIssueType.INSTANCE_ERROR_LOGS]: "Instance Error Logs",
    [EIssueType.LONG_RUNNING_REPORTS]: "Long Running Reports",
    [EIssueType.DUPLICATE_SCRIPT_INCLUDES]: "Deplicate Script Includes",
    [EIssueType.DUPLICATE_FIELDS]: "Duplicate Fields",
    [EIssueType.SCRIPT_INCLUDE_REPORTS]: "Script Includes Reports",
    [EIssueType.TOO_MANY_CHOICES]: "Too Many Choices"
};
