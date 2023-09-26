export const welcome = (req, res) => {
  res.json({
    data: "hello from nodejs api from routes...",
  });
};

export const preRegister = async (req, res) => {
  try {
    //
  } catch (err) {
    console.log(err);
    return res.json({ error: "Something went wrong. Please try again." });
  }
};
