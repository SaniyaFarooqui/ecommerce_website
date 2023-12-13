import permission from "../models/permission";


class PermissionRepository{
 
    constructor(){

    }
    public CreatePermission = async ( PermissionData : object | any ) : Promise<object> => {
        return await permission.create(PermissionData);
    }

    public UpdatePermission = async (id:string,PermissionData : object | any ) : Promise<[affectedCount: number]> => {
        return await permission.update(PermissionData,{where:{id:id}});
    }

    public GetPermissionById = async (id:string):Promise< object | null > =>{
        return await permission.findByPk(id);
    }

    public GetAllPermissions = async (page:number,limit:number) : Promise<{rows:Array<object>; count: number}> => {
        return await permission.findAndCountAll({
            offset:page,
            limit:limit,
        });
    }

    public DeletePermission = async(id:string) :Promise<number> => {
        return await permission.destroy({where:{id:id}});
    }

    public BulkDeletePermissions = async (ids:string[]) : Promise<number> => {
        return await permission.destroy({where:{id:ids}})
    }
}

export default PermissionRepository