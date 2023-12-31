import {DataTypes, Sequelize} from "sequelize";
import db from "../config/database"; 
import order_status from "../utils/masterFiles/orderstatus";
import payment_status from "../utils/masterFiles/paymentstatus";


const order = db.define("orders",{
    id:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4(), 
        allowNull:false,
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING,
        validate:{
            notEmpty:{
                msg:"Name cannot be empty"
            },
            notNull:{
                msg:"Name cannot be empty"
            }
        },
        allowNull:false
    },
    address:{
        type:DataTypes.STRING,
        allowNull:true
    },
    product_no:{
        type:DataTypes.STRING
    },
    order_status:{
        type:DataTypes.ENUM,
        values:order_status,
        get() {
            let order_status:string = this.getDataValue('order_status');
            let data = order_status.includes(order_status)
            return(data == false ? "Invalid status": order_status)
        }
    },
    payment_status:{
        type:DataTypes.ENUM,
        values:payment_status,
        get() {
            let payment_status = this.getDataValue('payment_status');
            let data = payment_status.includes(payment_status)
            return(data == false ?"invalid status":payment_status)
        }
    },
    GST_tax:{
        type:DataTypes.STRING
    },
    delivery_charges:{
        type:DataTypes.INTEGER
    },
    delivery_date:{
        type:DataTypes.DATE,
    },
    order_date:{
        type:DataTypes.DATE,
        defaultValue: Sequelize.fn('now')
    },
    order_price:{
        type:DataTypes.STRING
    },
    discount_price:{
        type:DataTypes.STRING
    },
    createdAt:{
        type:DataTypes.DATE,
        defaultValue: Sequelize.fn('now')
    },
    updatedAt:{
        type:DataTypes.DATE,
        defaultValue: Sequelize.fn('now')
    }
});
export default order;