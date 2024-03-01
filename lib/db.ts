const url = "https://jsonplaceholder.typicode.com/users/";

export async function get(id: string) {
  try {
    const res = await fetch(url + id);
    const data = await res.json();
    return { error: !res.ok ? data.message : null, data };
  } catch (error) {
    return { error: "Failed to fetch" };
  }
}

export async function getAll() {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return { error: !res.ok ? data.message : null, data };
  } catch (error) {
    return { error: "Failed to fetch" };
  }
}
