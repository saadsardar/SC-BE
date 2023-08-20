const paginate = async (model, page = 1, perPage = 12) => {
  try {
    const totalCount = await model.countDocuments();
    const totalPages = Math.ceil(totalCount / perPage);

    const skipAmount = (page - 1) * perPage;
    const data = await model.find().skip(skipAmount).limit(perPage);

    return {
      data,
      page,
      totalPages,
      totalCount,
    };
  } catch (error) {
    throw error;
  }
};

module.exports = paginate;
