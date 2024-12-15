import { useTranslation } from "react-i18next";

const menu_items = () => {
    const { t } = useTranslation();
    return [
        { name: t("nav_menu.home"), href: "/" },
        { name: t("nav_menu.product"), href: "/product" },
        { name: t("nav_menu.service"), href: "/service" },
        { name: t("nav_menu.aboutUs"), href: "/about-us" },
    ];
};

const lang_menu = () => {
    const { t } = useTranslation();
    return [
        {
            name: t("label.english"),
            value: "GB",
        },
        {
            name: t("label.khmer"),
            value: "KH",
        },
    ];
};

export { menu_items, lang_menu };
