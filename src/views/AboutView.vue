<template>
  <div class="centrar">
    <el-card class="ancho">
      <el-row>
        <Nav></Nav>
      </el-row>
      <el-row>
        <el-col :span="6" class="border1">
          {{nodo.label}}
          <div class="block heigth">
            <el-tree :data="info" node-key="id" :expand-on-click-node="true" draggable>
              <span class="custom-tree-node" slot-scope="{ node, data }">
                <span @click="() => getNodo(node, data)">
                  <i class="fa-lg fa-regular fa-folder"></i>
                  <span>{{ node.label }}</span>
                  <span>
                     <el-button type="text" size="mini" @click="() => append(node, data)">
                      Append
                    </el-button>
                    <!-- <el-button type="text" size="mini" @click="() => remove(node, data)">
                      Delete
                    </el-button> -->
                    <!--  <el-button @click="() => getNode(data)">select</el-button> -->
                  </span>
                </span>
              </span>
            </el-tree>

          </div>
        </el-col>
        <el-col :span="18" class="border2">
          <div class="heigth position">
            <i class="fa-3x fa-regular fa-folder"></i><br>
            <span>{{ nodo.label }}</span>
          </div>
        </el-col>
      </el-row>
      <el-row>
      </el-row>
    </el-card>
  </div>
</template>
<script>
import Nav from '@/components/Nav.vue'
import Products from '@/views/finderScripts/products'
import { mapActions, mapMutations, mapState } from 'vuex';
let id = 1000;
export default {
  components: {
    Nav,
  },
  data() {
    return {
      info: Products.products
    }
  },

  computed: {
    ...mapState(['nodo'])
  },

  methods: {
    ...mapMutations(['getNodo','append']),
    /* getNodo(nodo, data) {
      this.nodo = nodo
      console.log(nodo.label)
    }, */

    /* append(nodo, data) {
      const newChild = { id: id++, label: 'testtest', children: [] };
      if (!data.children) {
        this.$set(data, 'children', []);
      }
      data.children.push(newChild);
      console.log(" = > ",data)
    }, */

    remove(node, data) {
      /* const parent = node.parent;
      const children = parent.data.children || parent.data;
      const index = children.findIndex(d => d.id === data.id);
      children.splice(index, 1); */
      console.log(node,'  ',data)
    },

    renderContent(h, { node, data, store }) {
      return (
        <span class="custom-tree-node">
          <span>{node.label}</span>
          <span>
            <el-button size="mini" type="text" on-click={() => this.append(data)}>Append</el-button>
            <el-button size="mini" type="text" on-click={() => this.remove(node, data)}>Delete</el-button>
          </span>
        </span>);
    }
  },
}
</script>
<style scoped>
.border1 {
  padding: 5px;
  border-width: 1px;
  border-right: 1px solid #EBEEF5;
  border-bottom: 1px solid #EBEEF5;
}

.border2 {
  padding: 5px;
  border-width: 1px;
  border-bottom: 1px solid #EBEEF5;
}

.ancho {
  width: 70%;
}

.centrar {
  display: flex;
  justify-content: center;
}

.heigth {
  height: 500px;
}

.position {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
