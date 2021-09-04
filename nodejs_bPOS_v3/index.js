const { Router } = require("express");

const { tbl_table_orders, sequelize } = require("../models/index");

/**
 * SELECT to_table_id, count(to_table_id) AS count 
 * FROM tbl_table_orders
 * WHERE to_pay IS NULL
 * GROUP BY to_table_id;
 */
const { tbl_table_orders } = require("../models/index");
router.get("/", async (req, res, next)){
    const TABLE_COUNT = 12;

    const tables_layout = [];

    const table_order_count = await tbl_table_orders.fineAll({

        attributes: [
            "to_table_id",
            [sequelize.fn("count",sequelize.col("to_table_id")),"count"]
        ],
        where: { to_pay: null },
        group: "to_table_id"
    });



    res.render("index", { TABLES: tables_layout });

}

module.exports = router;
