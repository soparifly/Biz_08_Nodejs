module.exports = (seq, type) => {
  const gallery = seq.define(
    "tbl_gallery",
    {
      g_seq: {
        type: type.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      g_date: {
        type: type.STRING(10),
        allowNull: false,
      },
      g_time: {
        type: type.STRING(10),
        allowNull: false,
      },
      g_writer: {
        type: type.STRING(10),
        allowNull: false,
      },
      g_title: {
        type: type.STRING,
        allowNull: false,
      },
      g_filename: {
        type: type.STRING,
        allowNull: false,
      },
      g_fileoriginalname: {
        type: type.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
  return gallery;
};
