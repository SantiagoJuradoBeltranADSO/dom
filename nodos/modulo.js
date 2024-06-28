export const usuarios = async () => {
  const lista = await fetch("http://localhost:3000/post");
    const usuarios = await lista.json();
    return usuarios;
};