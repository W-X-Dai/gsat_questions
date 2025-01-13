<template>
	<div class="">
		<b-card title="歡迎光臨小雞教學網" sub-title="歡迎光臨小雞教學網" style="max-width: 20rem;" align-h="center">

			<b-card-text>
				代辦事項：
				<li>設定各科首頁</li>
        <li>製作編輯題目的頁面</li>
        <li>製作答題模式</li>
			</b-card-text>
		</b-card>
    

		<h3>以下為近期日誌</h3>
		<b-button @click="this.ShowNewUpdates=!this.ShowNewUpdates">點擊以展開或隱藏</b-button>
		<div v-if="this.ShowNewUpdates">
      20250106035952<br>遷徙到vue上面 <br>
      20250107231748<br>
      今天做了好多事情，累死人，沒力氣繼續寫扣就先打個日誌休息一下<br>
      首先，我今天解決了公式的渲染問題，利用v-md-editor配合他的katex外掛完成渲染。<br>
      此外，也完成了題目列表的頁面，現在只要點擊題目就會顯示詳細資料（包含詳解、來源等等），真的有夠困難（我愛vue）<br>
      我把題目列表以及上傳題目從過渡的網站遷移到vue版本上面，還是要使用vue比較好幹大事<br>
      喜歡用工作把時間填滿，這樣也不會有時間想東想西<br>
      走一步是一步吧！   <br>
		</div>
		<h3>最近一期日誌</h3>

    20250109000858 <br>
    今天事情頗多，只簡單把數學題目搬到所屬的索引而已，沒啥太大更新 <br>
    要找時間來管理一下氾濫的scope屬性

	</div>
</template>

<script>
	export default{
		data() {
			return {
				ShowOldUpdates: false,
				ShowNewUpdates: false,
			}
		},
	}
</script>

<style >
.center-block {
  width: 1000px;
  height: 300px;
  margin: 0 auto;
  text-align: left;
}  
</style>