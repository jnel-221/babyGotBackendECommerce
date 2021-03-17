const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  // find all categories and associated Products
  try {
    const allCategoryData = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(allCategoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  // find one category by its `id` value and its associated Products
  try {
    const allCategoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    if (!allCategoryData) {
      res
        .status(404)
        .json({ message: "Sorry, this category does not yet exist" });
    }
    res.status(200).json(allCategoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  // create a new category
  try {
    const newCategory = await Category.create(req.body);
    if (!newCategory) {
      res
        .status(404)
        .json({ message: "Uh-oh, something went wrong, please try again!" });
    }
    res.status(200).json(newCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  // update a category by its `id` value
  try {
    const updateCategory = await Category.update(req.body, {
      where: { id: req.params.id },
    });

    if (!updateCategory) {
      res.status(404).json({ message: `Sorry, ${req.body} not found!` });
    }

    res.status(200).json({ message: "Category updated!" });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  // delete a category by its `id` value
  try {
    const deleteCategory = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json(deleteCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
