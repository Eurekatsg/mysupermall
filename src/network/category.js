import { request } from "./request";

export function getCategory() {
  return request({
    url: "/category"
  });
}

export function getSubCategory(maitKey) {
  return request({
    url: "/subcategory",
    params: {
      maitKey
    }
  });
}

export function getCategoryDetail(miniWallkey, type) {
  return request({
    url: "/subcateogry/detail",
    params: {
      miniWallkey,
      type
    }
  });
}
