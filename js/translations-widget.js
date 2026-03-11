// Widget Feedeko - Traductions FR/EN
const widgetTranslations = {
    fr: {
        buttonLabel: "Contactez moi",
        title: "Me contacter",
        subtitle: "N'hésitez pas à me contacter",
        placeholder: "Votre message",
        sendLabel: "Envoyer",
        thanksTitle: "Merci à vous !",
        thanksMessage: "Votre message a bien été envoyé",
        emailLabel: "Email",
        emailPlaceholder: "example@gmail.com",
        requiredText: "*",
        requiredLabel: "requis"
    },
    en: {
        buttonLabel: "Contact me",
        title: "Contact me",
        subtitle: "Feel free to contact me",
        placeholder: "Your message",
        sendLabel: "Send",
        thanksTitle: "Thank you!",
        thanksMessage: "Your message has been sent successfully",
        emailLabel: "Email",
        emailPlaceholder: "example@gmail.com",
        requiredText: "*",
        requiredLabel: "required"
    },
    es: {
        buttonLabel: "Contáctame",
        title: "Contáctame",
        subtitle: "No dudes en contactarme",
        placeholder: "Tu mensaje",
        sendLabel: "Enviar",
        thanksTitle: "¡Gracias!",
        thanksMessage: "Tu mensaje ha sido enviado con éxito",
        emailLabel: "Correo electrónico",
        emailPlaceholder: "example@gmail.com",
        requiredText: "*",
        requiredLabel: "requerido"
    }
};

// Fonction pour obtenir la configuration du widget dans la langue actuelle
function getWidgetConfig(lang = 'fr') {
    const t = widgetTranslations[lang] || widgetTranslations.fr;
    
    return {
        widgetConfig: {
            accentColor: "#7c3aed",
            bgColor: "#22292f",
            textColor: "#ffffff",
            buttonLabel: t.buttonLabel,
            title: t.title,
            subtitle: t.subtitle,
            placeholder: t.placeholder,
            sendLabel: t.sendLabel,
            thanksTitle: t.thanksTitle,
            thanksMessage: t.thanksMessage,
            positionSide: "right",
            positionBottom: 24,
            positionSideOffset: 24
        },
        formConfig: {
            fields: [
                {
                    id: "qqw1jz6b",
                    type: "email",
                    label: t.emailLabel,
                    placeholder: t.emailPlaceholder,
                    required: true,
                    order: 0
                }
            ],
            requiredText: t.requiredText,
            requiredLabel: t.requiredLabel
        }
    };
}
