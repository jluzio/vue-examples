<template>
  <md-app>
    <md-app-toolbar class="md-primary">
      <span class="md-title">Report</span>
    </md-app-toolbar>
    <md-app-content>
      <md-card>
        <md-card-header>
          <div class="md-title">
            Data
          </div>
        </md-card-header>
        <md-card-content>
          <div class="md-layout">
            <div class="md-layout-item"></div>
            <div class="md-layout-item">
              <form ref="uploadForm">
                <md-field>
                  <label>File</label>
                  <md-file
                    ref="inputReportFile"
                    id="inputReportFile"
                    v-model="reportFile"
                    accept="application/json"
                    @md-change="handleFileChange"
                    @click="handleUploadFileClick"
                  />
                </md-field>
                <md-button
                  class="md-raised md-primary"
                  @click="handleUploadClick"
                  >Upload</md-button
                >
              </form>
            </div>
            <div class="md-layout-item"></div>
          </div>
          <div v-if="reportResourceStatus === 'PENDING'">
            <md-progress-bar md-mode="indeterminate" />
          </div>
        </md-card-content>
      </md-card>

      <div class="spacer"></div>

      <md-card v-if="report && report.summary">
        <md-card-header>
          <div class="md-title">Summary</div>
        </md-card-header>
        <md-card-content>
          <md-list class="summary-list">
            <md-list-item>
              <md-icon>format_list_numbered</md-icon>
              <span class="md-list-item-text"
                >Total: {{ report.summary.count }}</span
              >
            </md-list-item>
            <md-list-item>
              <md-icon>supervisor_account</md-icon>
              <span class="md-list-item-text"
                >Duplicates: {{ report.summary.duplicates }}</span
              >
            </md-list-item>
            <md-list-item>
              <md-icon>warning</md-icon>
              <span class="md-list-item-text"
                >Unnecessary: {{ report.summary.unnecessary }}</span
              >
            </md-list-item>
          </md-list>
        </md-card-content>
      </md-card>

      <div class="spacer" />

      <md-card
        v-if="report && report.rendering && reportResourceStatus === 'DEFINED'"
      >
        <md-card-header>
          <div class="md-title">
            Renderings <md-chip v-text="'Count: ' + renderings.length" />
          </div>
        </md-card-header>
        <md-card-content>
          <div class="md-layout">
            <div class="md-layout-item md-size-15">
              <md-field>
                <label>Page Size</label>
                <md-select v-model.number="pageSize">
                  <md-option
                    v-for="[id, size] of Object.entries(pageSizes)"
                    :key="size"
                    :value="size"
                    >{{ id }}</md-option
                  >
                </md-select>
              </md-field>
            </div>
            <div class="md-layout-item">
              <paginate
                v-model="currentPage"
                :page-count="totalPages"
                :container-class="paginatorClasses.paginator"
                :page-class="paginatorClasses.page"
                :page-link-class="paginatorClasses.pageLink"
                :prev-class="paginatorClasses.page"
                :prev-link-class="paginatorClasses.pageLink"
                :next-class="paginatorClasses.page"
                :next-link-class="paginatorClasses.pageLink"
                :active-class="paginatorClasses.active"
              ></paginate>
            </div>
          </div>

          <md-table v-model="pagedRenderings">
            <md-table-toolbar>
              <h1 class="md-title">
                Values
              </h1>
              <md-field
                md-clearable
                class="md-toolbar-section-end"
                @md-clear="resetFilter"
              >
                <label>Search</label>
                <md-input placeholder="Uid..." v-model="filters.uid" />
                <md-input
                  placeholder="Document..."
                  v-model="filters.document"
                />
                <md-input placeholder="Page..." v-model.number="filters.page" />
                <md-input
                  placeholder="Custom..."
                  v-model="customFilterText"
                  v-if="allowCustomFilter"
                  @keyup.enter="setCustomFilterText"
                />
              </md-field>
            </md-table-toolbar>

            <md-table-row slot="md-table-row" slot-scope="{ item }">
              <md-table-cell md-label="first timestamp">
                {{ item.details.timestamp }}
              </md-table-cell>
              <md-table-cell md-label="uid">{{ item.uid }}</md-table-cell>
              <md-table-cell md-label="document">
                {{ item.document }}
              </md-table-cell>
              <md-table-cell md-label="page" md-numeric>
                {{ item.page }}
              </md-table-cell>
              <md-table-cell md-label="start">
                {{ item.details.starts }}
              </md-table-cell>
              <md-table-cell md-label="get">
                {{ item.details.gets }}
              </md-table-cell>
            </md-table-row>
          </md-table>
        </md-card-content>
      </md-card>
    </md-app-content>
  </md-app>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import _ from 'lodash'
import { Report, Rendering, Summary, ResourceStatus } from './models'

type RenderingPredicate = (rendering: Rendering) => boolean
type RenderingFilter = Partial<Rendering> & {
  custom?: RenderingPredicate
}

@Component
export default class RenderReport extends Vue {
  private reportFile = ''
  private autoUpload = true
  private result = ''
  private report: Report | null = null
  private filters: RenderingFilter = this.initFilter()
  private customFilterText = ''
  private searchDocument = ''
  private pagedRenderings: Rendering[] = []
  private renderings: Rendering[] = []
  private pageSize = 20
  private currentPage = 1
  private reportResourceStatus: ResourceStatus = ResourceStatus.UNDEFINED
  private pageSizes: Record<string, number> = {
    10: 10,
    20: 20,
    50: 50,
    100: 100,
    500: 500,
    1000: 1000,
    All: 1000000
  }
  private paginatorClasses = {
    paginator: 'pagination',
    page: 'md-theme-default md-button md-dense md-raised md-primary',
    pageLink: 'md-button-content md-ripple text-white',
    active: 'md-accent'
  }
  private allowCustomFilter: boolean = process.env.NODE_ENV !== 'production'

  get totalPages() {
    return Math.ceil(this.renderings.length / this.pageSize)
  }

  renderingsCount() {
    return this.renderings.length
  }

  handleUploadClick() {
    this.formReset()
    const fileInput = this.$refs.inputReportFile as any
    fileInput.openPicker()
  }

  handleUploadFileClick() {
    const form = this.$refs.uploadForm as HTMLFormElement
    form.reset()
  }

  handleFileChange(fileList: FileList) {
    if (this.autoUpload) {
      this.handleUpload(fileList)
    }
  }

  handleUpload(fileList: FileList) {
    const reportFile = fileList?.item(0)
    if (!reportFile) {
      return
    }
    const fr = new FileReader()
    fr.onload = e => {
      this.reportResourceStatus = ResourceStatus.PENDING
      const report = JSON.parse(e.target?.result as string) as Report
      report.rendering.forEach(r => {
        const timestamps: string[] = [...r.start, ...r.get]
        const timestamp = _.min(timestamps)
        r.details = {
          timestamp,
          starts: this.datesToText(r.start),
          gets: this.datesToText(r.get)
        }
      })
      report.rendering = _.sortBy(
        report.rendering,
        rendering => rendering.details?.timestamp
      )
      this.report = report
      this.renderings = this.report.rendering
      this.selectPage()
      const formatted = JSON.stringify(report, null, 2)
      this.result = formatted
      this.reportResourceStatus = ResourceStatus.DEFINED
    }
    fr.onerror = e => {
      this.reportResourceStatus = ResourceStatus.ERROR
      // console.log('onerror', e)
    }
    fr.readAsText(reportFile)
  }

  formReset() {
    const form = this.$refs.uploadForm as HTMLFormElement
    form.reset()
  }

  paginate(page: number = this.currentPage) {
    const values = this.renderings
    const start = Math.min((page - 1) * this.pageSize, values.length)
    const end = Math.min(page * this.pageSize, values.length)
    this.pagedRenderings = values.slice(start, end)
  }

  @Watch('currentPage')
  watchCurrentPage() {
    this.paginate()
  }

  @Watch('pageSize')
  watchPageSize() {
    this.selectPage(1)
  }

  selectPage(page = 1) {
    this.currentPage = page
    this.paginate()
  }

  @Watch('filters', { deep: true })
  searchValues() {
    const allRenderings = this.report?.rendering ?? []
    const predicates: RenderingPredicate[] = []
    const { uid, document, page, custom } = this.filters
    if (custom != null) {
      predicates.push(custom)
    }
    if (uid) {
      predicates.push(item => item.uid?.includes(uid) ?? false)
    }
    if (document) {
      predicates.push(item => item.document?.includes(document) ?? false)
    }
    if (page != null && typeof page === 'number') {
      predicates.push(item => item.page === page)
    }
    const renderings = predicates.length
      ? allRenderings.filter(item => _.every(predicates, p => p(item)))
      : allRenderings
    this.renderings = renderings
    this.selectPage()
  }

  searchByUid = (items: Rendering[], term: string) => {
    if (term) {
      return items.filter(item => item.uid?.includes(term))
    }
    return items
  }

  searchByDocument = (items: Rendering[], term: string) => {
    if (term) {
      return items.filter(item => item.document?.includes(term))
    }
    return items
  }

  setCustomFilter(filter?: RenderingPredicate) {
    this.filters.custom = filter
  }

  initFilter(): RenderingFilter {
    return {
      document: '',
      page: null,
      uid: '',
      custom: undefined
    }
  }

  resetFilter() {
    this.filters = this.initFilter()
  }

  setCustomFilterText() {
    const filterText = this.customFilterText
    const validFilterPattern = filterText.trim().match('\\w+ =>.+')
    try {
      if (!filterText.trim()) {
        this.setCustomFilter(undefined)
      } else if (!validFilterPattern) {
        throw new Error('Invalid filter pattern')
      } else {
        const filter: RenderingPredicate = eval(`${filterText}`)
        this.setCustomFilter(filter)
      }
    } catch (e) {
      console.error('Invalid filter', e)
      this.setCustomFilter(undefined)
    }
  }

  datesToText(dates: string[]) {
    return dates.join(' | ')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

ul.pagination {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;

  li {
    &.active {
      background: gray;
    }
    a {
      text-decoration: none !important;
    }
    .text-white {
      color: white;
    }
    .text-black {
      color: white;
    }
  }
}

.spacer {
  margin-top: 10px;
}
</style>
