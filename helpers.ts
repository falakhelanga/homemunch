export const transformCollectionSnap = (snap: any) => {
  return snap.docs.map((doc: any) => {
    const data = doc.data();

    return { ...data, id: doc.id };
  });
};

export const transformDocSnap = (snap: any) => {
  const data = snap.data();

  return { ...data, id: snap.id };
};

export const getObjFromLink = (link: any) => {
  const sep = link?.indexOf("__");
  const id = link?.substring(0, sep);
  const name = link?.substring(sep + 2);
  return { id, name };
};

export const getObjFromLink_WithType = (link: any) => {
  const sep = link.indexOf("__");
  const typeSep = link.indexOf("---");
  const id = link.substring(0, sep);
  const name = link.substring(sep + 2, typeSep);
  const type = link.substring(typeSep + 3);
  return { id, name, type };
};
