import { useTranslation } from "react-i18next";
import { lang_menu } from "@/Constants/Variable";

function ButtonReadMore({ icon, ...rest }) {
    const { t } = useTranslation();
    return (
        <button
            {...rest}
            className="relative w-fit flex justify-center border px-2 py-1 rounded gap-2 items-center cursor-pointer text-sm md:text-md lg:text-lg text-blue-500 group overflow-hidden"
        >
            <span>{t("our_products.read_more")}</span>
            {icon || <i className="pi pi-arrow-right"></i>}
            <span className="absolute left-0 bottom-0 mb-0 flex h-1 w-0 translate-x-0 transform bg-blue-400 opacity-90 transition-all duration-300 ease-out group-hover:w-full"></span>
        </button>
    );
}

function ButtonLanguage() {
    const { i18n } = useTranslation();

    const changeLanguage = () => {
        const newLanguage = i18n.language === "GB" ? "KH" : "GB";
        i18n.changeLanguage(newLanguage);
        document.body.className = newLanguage === "GB" ? "lang-en" : "lang-kh";
    };

    return (
        <button
            onClick={changeLanguage}
            className="flex flex-row md:justify-center items-center gap-2 md:p-2"
        >
            <div className="w-8 h-8 border p-1 rounded-full">
                <img
                    src={`https://flagsapi.com/${i18n.language.toUpperCase()}/flat/64.png`}
                    alt={`Language: ${i18n.language}`}
                />
            </div>
            <p className="text-white">
                {lang_menu().find((lang) => i18n.language === lang.value).name}
            </p>
        </button>
    );
}

export { ButtonReadMore, ButtonLanguage };
