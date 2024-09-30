Page({
  /**
   * 页面的初始数据
   */
  data: {
    triggered: false,
  },

  onScrollToUpper(e) {
    console.log(e)
  },

  onScrollToLower(e) {
    console.log(e)
  },

  onScroll(e) {
    console.log(e)
  },

  onRefresherPulling(e) {
    console.log(e)
  },

  onRefresherRefresh(e) {
    if (this._freshing) return
    this._freshing = true
    setTimeout(() => {
      this.setData({ triggered: false })
      this._freshing = false
    }, 3000)
    console.log(e)
  },

  onRefresherRestore(e) {
    console.log(e)
  },

  onRefresherAbort(e) {
    console.log(e)
  },
})
