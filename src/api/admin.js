import client from "./client";

export const addSubAdmin = async (subAdminInfo) => {
  try {
    console.log(subAdminInfo);
    const { data } = await client.post(
      "/admin/create",
      {
        headers: {
          Authorization: "Bearer " + token,
          accept: "application/json",
        },
      },
      subAdminInfo
    );
    return data;
  } catch (error) {
    const { response } = error;

    if (response?.data) return response.data;

    return { error: error.message || error };
  }
};
