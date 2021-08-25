module.exports = (sequelize, DataType) => {
  return sequelize.define("tbl_bbs", {
    b_id: {
      type: DataType,
      INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    b_date: {
      type: DataType,
      STRING,
      allowNull: false,
    },
    b_writer: {
      type: DataType,
      STRING,
      allowNull: false,
    },
    b_subject: { type: DataType, STRING },
    b_text: {
      type: DataType,
      BLOB,
      b_count: { type: DataType, INTEGER },
    },
  });
};
