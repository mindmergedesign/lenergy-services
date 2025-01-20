export const urlFromId = (ref) => {
  const [_file, id, extension] = ref.split('-');
  return `https://cdn.sanity.io/files/vfbbr0gd/production/${id}.${extension}`;
};
