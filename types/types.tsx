export type SideNavItem = {
    title: string;
    path: string;
    icon?: JSX.Element;
    submenu?: boolean;
    subMenuItems?: SideNavItem[];
};

export type SideNavItemGroup = {
    title: string;
    path: string;
    menuList: SideNavItem[];
}