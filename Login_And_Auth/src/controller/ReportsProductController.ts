import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import { Proceso } from '../entity/proceso';
import { validate } from 'class-validator';
import {Registro_Producto} from "../entity/Registro_Producto";

export class ReportsController {
    static getAll = async (req: Request, res: Response) =>{
        console.log('Attempting to get Product')
        let ProductRepo;
        let Product
        try{;
            ProductRepo = getRepository(Registro_Producto);
            console.log('Repo = ',ProductRepo)
            Product = await ProductRepo.find()
            console.log(Product)
        }
        catch (e) {
            console.log('error = ', e)
            return res.status(404).json({message: 'no Products'})
            console.log('Repo - ',ProductRepo)
        }
        res.send(Product);
    }

    static getById = async (req: Request, res: Response) =>{
        const {id} = req.params;
        const ProductRepo = getRepository(Registro_Producto);
        try{
            const Product = await ProductRepo.findOneOrFail({where:{id_Proceso: id}})
            res.send(Product)
        }
        catch (e) {
            res.status(404).json({message: 'Product not found'})
        }
    }

    static newProduct = async (req: Request, res: Response) =>{
        console.log('new Product = ', req.body)
        const {cantProducto_regProducto, tipoProducto_regProducto, subProducto_regProducto, unidadMedida_regProducto, detalle_regProducto}= req.body
        const Product = new Registro_Producto();

        Product.cantProducto_regProducto = cantProducto_regProducto;
        Product.tipoProducto_regProducto = tipoProducto_regProducto;
        Product.subProducto_regProducto = subProducto_regProducto;
        Product.unidadMedida_regProducto = unidadMedida_regProducto
        Product.detalle_regProducto = detalle_regProducto;

        //validator
        const errors = await validate(Product, {validationError: { target: false, value: false}});
        if(errors.length > 0)
        {
            return res.status(400).json(errors)

        }

        //Hash pass

        const ProductRepo = getRepository(Registro_Producto);
        try{
            await ProductRepo.save(Product);
        }
        catch (e) {
            return res.status(409).json({message: 'ProductName taken'})
        }

        //Front ans
        res.send('Product created')
    }

    // static editProduct = async (req: Request, res: Response) =>{
    //     let Product;
    //     const {id} = req.params;
    //     const {ProductName, password, role, phone, name, lastname} = req.body
    //
    //     const ProductRepo = getRepository(Proceso);
    //     try{
    //         Product = await ProductRepo.findOneOrFail({where:{id_Proceso: id}})
    //         Product.email_Proceso = ProductName;
    //         Product.constrasena_Proceso = password;
    //         Product.rol_Proceso = role;
    //         Product.nom_Proceso = name;
    //         Product.ape_Proceso = lastname;
    //         Product.tel_Proceso = phone;
    //     }
    //     catch (e) {
    //         return res.status(404).json({message: 'Product not found'})
    //     }
    //
    //     const errors = await validate(Proceso, {validationError: { target: false, value: false}});
    //     if(errors.length > 0){
    //         return res.status(400).json(errors);
    //     }
    //
    //     try{
    //         Product.hashPassword();
    //         await ProductRepo.save(Product)
    //     }
    //     catch (e) {
    //         res.status(409).json({message: 'Product already exists'})
    //     }
    //
    //     res.status(201).json({message: 'Edit successful'})
    // }

    static deleteProduct = async (req: Request, res: Response) =>{
        const {id} = req.params;
        const ProductRepo = getRepository(Registro_Producto);

        let Product: Registro_Producto;

        try{
            Product = await ProductRepo.findOneOrFail(id)
        }
        catch (e) {
            return res.status(404).json({message: 'Product not found'});
        }

        //remove
        await ProductRepo.delete(id);
        res.status(201).json({message: 'Deleted'})
    }
}

export default ReportsController;
