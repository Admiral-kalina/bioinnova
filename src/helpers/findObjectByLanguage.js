export const findObjectsByLanguage = (jsonResponse, language, isUserData) => {
    const matchingObjects = [];

    jsonResponse.forEach(item => {
        let attributes;
        let itemId;

        if (isUserData) {
            attributes = item.data.data.attributes;
            itemId = item.data.data.id;
        } else {
            attributes = item.attributes;
            itemId = item.id;
        }

        if (attributes.locale === language) {
            matchingObjects.push({id: itemId, ...attributes});
        } else if (attributes.localizations && attributes.localizations.data) {
            attributes.localizations.data.forEach(localization => {
                if (localization.attributes.locale === language) {
                    matchingObjects.push({id: itemId, ...localization.attributes});
                }
            });
        }
    });


    return matchingObjects;
};