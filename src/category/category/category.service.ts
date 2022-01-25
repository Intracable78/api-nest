import { Body, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCategoryDto } from 'dto/createCategory.dto';
import { UpdateCategoryDto } from 'dto/updateCategory.dto';
import { DeleteResult, Repository } from 'typeorm';
import { CategoryEntity } from './../../../entities/category.entity';

@Injectable()
export class CategoryService {
    constructor(@InjectRepository(CategoryEntity) private readonly categoryRepository: Repository<CategoryEntity>) {

    }


    async createCategory(createCategoryDto: CreateCategoryDto) {
        const createCategory = await this.categoryRepository.save(createCategoryDto);
        if (!createCategory) {
            throw new Error('Erreur lors de la creation de la category ')
        }
        return "La categorie a été crée"
    }

    async getAllCategories() {
        return await this.categoryRepository.find();
    }

    async getCategoryByid(id: number) {
        const findCategoryById = await this.categoryRepository.findOne(id);
        if (!findCategoryById) {
            throw new NotFoundException('Categoryid ' + id + ' not exist in databse')
        }

        return findCategoryById;
    }

    async deleteCategorybyId(id: number) {
        return this.categoryRepository.delete(id);
    }

    async updateCategory(id: number, updateCategoryDto: UpdateCategoryDto) {
        const updateCategory = await this.categoryRepository.preload({ id, ...updateCategoryDto })

        if (!updateCategory) {
            throw new NotFoundException('Catgory id ' + id + ' not exist in databse')
        }

        return await this.categoryRepository.save(updateCategory);
    }




}
