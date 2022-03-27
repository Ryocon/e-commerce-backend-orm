const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  // DONE !!!
  try {
    const tagData = await Tag.findAll({
      include: [
        {
          model: Product,
          attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
        }
      ]
    })
    res.status(200).json(tagData)
  } catch (err) {
    res.status(500).json(err)
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  // DONE !!!
  try {
    const tagData = await Category.findByPk(req.params.id, {
      include: [{
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
      }]
    })
    res.status(200).json(tagData)
  } catch (err) {
    res.status(500).json(err)
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  // DONE !!!
  try {
    const tagData = await Category.create(req.body)
    res.status(200).json(tagData)
  } catch (err) {
    res.status(400).json(err)
  }
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  //  DONE !!!
  try {
    const tagData = await Category.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    res.status(200).json(tagData)
  } catch (err) {
    res.status(400).json(err)
  }
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  //  DONE !!!
  try {
    const tagData = await Category.destroy({
      where: {
        id: req.params.id
      }
    })
    res.status(200).json(tagData)
  } catch (err) {
    res.status(400).json(err)
  }
});

module.exports = router;
