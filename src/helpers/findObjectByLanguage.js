export const findObjectsByLanguage = (jsonResponse, language) => {
    const matchingObjects = [];

    jsonResponse.forEach(item => {
        const attributes = item.data.data.attributes;

        if (attributes.locale === language) {
            matchingObjects.push(attributes);

        } else if (attributes.localizations && attributes.localizations.data) {
            attributes.localizations.data.forEach(localization => {

                if (localization.attributes.locale === language) {
                    matchingObjects.push(localization.attributes);
                }
            });
        }
    });

    return matchingObjects;
}