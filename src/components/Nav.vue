<template>
    <div>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect"
            style="background-color: rgb(240, 240, 240);">
            <div class="pnav">
                <div class="flex">
                    <el-menu-item index="1"><i class="fa-lg fa-solid fa-eye"></i></el-menu-item>
                    <el-submenu index="2">
                        <template slot="title"><i class="fa-lg fa-solid fa-folder"></i></template>
                        <el-menu-item index="2-1">item one</el-menu-item>
                        <el-menu-item index="2-2">item two</el-menu-item>
                        <el-menu-item index="2-3">item three</el-menu-item>
                        <el-submenu index="2-4">
                            <template slot="title">item four</template>
                            <el-menu-item index="2-4-1">item one</el-menu-item>
                            <el-menu-item index="2-4-2">item two</el-menu-item>
                            <el-menu-item index="2-4-3">item three</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                </div>
                <div>
                    <el-dialog title="Warning" :visible.sync="centerDialogVisible" width="30%" center>
                        <el-row>
                            <span><i class="fa-regular fa-folder-open"></i></span><br>
                            <span>Nueva Carpeta</span>
                        </el-row>
                        <el-row class="mt-3">
                            <el-col :span="24">
                                <el-input v-model="name"></el-input>
                            </el-col>
                        </el-row>
                        <span slot="footer" class="dialog-footer">
                            <el-button @click="centerDialogVisible = false">Cancel</el-button>
                            <el-button type="primary" @click="append(data)">Confirm</el-button>
                        </span>
                    </el-dialog>
                    <el-menu-item index="3">
                        <i class="fa-lg fa-solid fa-folder-plus" @click="centerDialogVisible = true"></i>
                    </el-menu-item>
                </div>
            </div>
        </el-menu>
    </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex';
export default {
    data() {
        return {
            name:'',
            centerDialogVisible: false,
            activeIndex: '1',
            activeIndex2: '1',
        }
    },
    computed:{
        ...mapState(['nodo','data'])
    },
    methods: {
        ...mapMutations(['append']),
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
    },

}
</script>

<style scoped>
.pnav {
    display: flex;
    justify-content: space-between;
}

.flex {
    display: flex;
}
</style>