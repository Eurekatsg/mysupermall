import BackTop from "components/content/backTop/BackTop";
import { BACK_POSITION } from "common/const";

export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isShowBackTop: false
    };
  },
  methods: {
    backTop() {
      this.$refs.scroll.scrollTo(0, 0, 300);
    },
    ShowBackTop(position) {
      this.isShowBackTop = -position.y > BACK_POSITION;
    }
  }
};
