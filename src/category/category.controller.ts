import { Body, Controller, Get, Param, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateCategoryDto } from 'dto/createCategory.dto';
import { UpdateUserDto } from 'dto/updateUser.dto';
import { UserRole } from '../enum/user-role.enum';
import { CategoryService } from './category.service';

@Controller('api/category')
export class CategoryController {

    constructor(private categoryService: CategoryService) {

    }

    @Post('create')
    createCategory(@Body() createCategoryDto: CreateCategoryDto) {
        return this.categoryService.createCategory(createCategoryDto);
    }

    @Get()
    @UseGuards(AuthGuard('jwt'))

    getAllGategories(@Req() req: any) {
        console.log(req.user)
        if (req.user.rank.name === UserRole.ADMIN) {
            console.log('user is admin')
        }
        return this.categoryService.getAllCategories()
    }

    @Get(':id')
    async getCategoryByid(@Param('id') id: string) {
        return await this.categoryService.getCategoryByid(+id)
    }

    @Patch(':id')
    async updateCategory(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        return await this.categoryService.updateCategory(+id, updateUserDto)
    }
}
