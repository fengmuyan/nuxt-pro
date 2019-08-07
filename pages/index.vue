<template>
  <div class="homepage">
    <banner-list></banner-list>
    <suggest-list></suggest-list>
    <brand-list></brand-list>
    <goods-list></goods-list>
    <links-list></links-list>
    <fixed-icon></fixed-icon>
  </div>
</template>

<script>
import BannerList from "@/components/index/BannerList";
import SuggestList from "@/components/index/SuggestList";
import BrandList from "@/components/index/BrandList";
import GoodsList from "@/components/index/GoodsList";
import LinksList from "@/components/index/LinksList";
import FixedIcon from "@/components/index/FixedIcon";
import api from "@/plugins/api";
export default {
  name: "homepage",
  components: {
    BannerList,
    SuggestList,
    BrandList,
    GoodsList,
    LinksList,
    FixedIcon
  },
  async fetch({ params, app, store }) {
    const { code, list } = await api.getMenu();
    if (code === 0) {
      store.commit("setMenu", list);
    }
  },
  async created() {
    const resp = await api.getUserBlogs();
    console.log(resp)
  },
};
</script>

<style lang="scss">
.homepage {
  * {
    box-sizing: content-box;
  }
}
</style>