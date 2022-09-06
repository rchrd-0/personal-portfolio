// Import all images for project previews, group & map by project id
const importAll = (r) => {
  const images = {};
  r.keys().map((item) => {
    const key = item.replace('./', '').substring(0, item.length - 8);
    key in images ? images[key].push(r(item)) : (images[key] = [r(item)]);
  });

  return images;
};

export default importAll;
