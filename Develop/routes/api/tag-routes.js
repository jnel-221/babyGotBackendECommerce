const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  // find all tags and include its associated Product data
  try {
    const allTagData = await Tag.findAll({
      include: [{ model: Product }],
    });
    if (!allTagData) {
      res
        .status(404)
        .json({ message: "Uh-oh! Something went wrong, please try again!" });
    }

    res.status(200).json(allTagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  // find a single tag by its `id` and associated Product data
  try {
    const tagIdData = await Tag.findByPk(req.params.id,{
      include: [{ model: Product }],
    });
    if (!tagIdData) {
      res
        .status(404)
        .json({ message: "Uh-oh! Tag not found, please try again!" });
    }

    res.status(200).json(tagIdData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  // create a new tag
  try {
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  // update a tag's name by its `id` value
  try {
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  // delete on tag by its `id` value
  try {
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
