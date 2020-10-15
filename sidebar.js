import React from 'react';
import S from '@sanity/desk-tool/structure-builder';

// build a custom side bar
export default function Sidebar() {
  return S.list()
    .title(`Slick's Slices`)
    .items([
      S.listItem()
        .title('Homepage')
        .icon(() => <strong>🔥</strong>)
        .child(S.editor().schemaType('storeSettings').documentId('downtown')),
      // add rest of the document items
      ...S.documentTypeListItems().filter(
        (item) => item.getId() !== 'storeSettings'
      ),
    ]);
}
