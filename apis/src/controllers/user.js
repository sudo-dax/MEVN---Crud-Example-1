import * as getUserService from "../services/user/get";
import * as putUserService from "../services/user/put";
import * as postUserService from "../services/user/post";
import * as deleteUserService from "../services/user/delete";

export const getUsers = async (req, res) => {
  try {
    res.status(200).json(await getUserService.all());
    console.log("Fetching...")
  } catch (e) {
    res.status(500).json(e);
  }
};

export const getUser = async (req, res) => {
  try {
    res.status(200).json(await getUserService.byId(req.params.id));
  } catch (e) {
    res.status(500).json(e);
  }
};

export const createUser = async (req, res) => {
  try {
    console.log("Start Create")
    const { name, email, password } = req.body;
    res.status(201).json(await postUserService.create({name, email, password}));
    console.log("Finish Create")
  } catch (e) {
    res.status(500).json(e);
  }
};

export const updateUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    res.status(200).json(
      await putUserService.byId(req.params.id, {
        name,
        email,
        password,
      })
    );
  } catch (e) {
    res.status(500).json(e);
  }
};

export const deleteUser = async (req, res) => {
  try {
    res.status(200).json(await deleteUserService.byId(req.params.id));
  } catch (e) {
    res.status(500).json(e);
  }
};
