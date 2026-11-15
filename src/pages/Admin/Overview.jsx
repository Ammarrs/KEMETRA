import React, { useState } from 'react'
import {
  LuBookOpen,
  LuMapPin,
  LuCircleCheck,
  LuFilePenLine,
  LuHeadphones,
  LuBox,
  LuCalendar,
  LuPlus,
  LuHourglass,
  LuArrowRight,
  LuInfo,
  LuArrowUpRight,
  LuChevronDown,
} from 'react-icons/lu'

const RANGES = [
  '1-30 Oct 2026 · This month',
  '1-30 Sep 2026 · Last month',
  '1 Jan - 30 Oct 2026 · This year',
]

const STATS = [
  { label: 'Total stories', value: 48, note: 'Across three heritage collections', icon: LuBookOpen },
  { label: 'Historic places', value: 26, note: 'Linked to the heritage map', icon: LuMapPin },
  { label: 'Published stories', value: 32, note: 'Available in the sample catalog', icon: LuCircleCheck },
  { label: 'Draft stories', value: 12, note: 'In the editorial workspace', icon: LuFilePenLine },
  { label: 'Audio recordings', value: 18, note: 'Narrated story records', icon: LuHeadphones },
  { label: '3D experiences', value: 6, note: 'Place-linked experiences', icon: LuBox },
]

const ACTIVITY = [
  { id: 1, title: 'Giza: a horizon in stone', meta: 'Draft updated · Nour Hassan', time: 'Today, 10:42', status: 'Draft' },
  { id: 2, title: 'A sanctuary above the city', meta: 'English version reviewed · Mariam Ali', time: 'Today, 09:15', status: 'Published' },
  { id: 3, title: 'The art of the courtyard', meta: 'Transcript revised · Omar Adel', time: 'Yesterday', status: 'Published' },
  { id: 4, title: 'Along the Nile at Philae', meta: 'Moved out of the public collection', time: '28 Oct 2026', status: 'Archived' },
]

const STATUS_COUNTS = [
  { label: 'Published', value: 32, total: 48, bar: 'bg-success' },
  { label: 'Draft', value: 12, total: 48, bar: 'bg-primary' },
  { label: 'Archived', value: 4, total: 48, bar: 'bg-muted-foreground' },
]

const DISCOVERED = [
  {
    title: 'Giza, a landscape of memory',
    source: 'Giza Pyramids · Sample data',
    reads: '1,284 reads',
    listens: '436 listens',
    img: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?w=200&q=80',
  },
  {
    title: 'A sanctuary above the city',
    source: 'The Hanging Church · Sample data',
    reads: '968 reads',
    listens: '312 listens',
    img: 'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=200&q=80',
  },
  {
    title: 'The art of the courtyard',
    source: 'Sultan Hassan · Sample data',
    reads: '742 reads',
    listens: '228 listens',
    img: 'https://images.unsplash.com/photo-1597211684565-dca64d72bdfe?w=200&q=80',
  },
]

const STATUS_STYLES = {
  Draft: 'border-primary/50 bg-primary/10 text-muted',
  Published: 'border-success/40 bg-success/10 text-success',
  Archived: 'border-border bg-surface-secondary text-muted-foreground',
}

const FILTERS = ['All', 'Draft', 'Published', 'Archived']

function Overview() {
  const [range, setRange] = useState(RANGES[0])
  const [rangeOpen, setRangeOpen] = useState(false)
  const [filter, setFilter] = useState('All')
  const [showAll, setShowAll] = useState(false)

  const filteredActivity = ACTIVITY.filter((item) => filter === 'All' || item.status === filter)
  const visibleActivity = showAll ? filteredActivity : filteredActivity.slice(0, 3)

  return (
    <div className="w-full px-4 py-6 sm:px-6 md:px-8 md:py-8 xl:px-10">

      {/* Header */}
      <div className="flex flex-col gap-2.5">
        <span className="text-[11px] font-semibold tracking-[0.18em] text-muted md:text-xs">
          THE COLLECTION AT A GLANCE
        </span>
        <h1 className="text-3xl font-semibold text-foreground md:text-4xl xl:text-5xl">Admin Overview</h1>
        <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
          A considered view of your living heritage collection.
        </p>
      </div>

      {/* Sample data notice */}
      <div className="mt-6 flex gap-3 rounded-lg border border-success/30 bg-success/10 p-4 md:mt-8">
        <LuInfo className="mt-0.5 shrink-0 text-lg text-success" />
        <div>
          <p className="text-sm font-semibold text-success">Sample data</p>
          <p className="mt-1 text-sm text-muted-foreground">
            All counts, activity and analytics are illustrative. No live visitor or publishing data is connected.
          </p>
        </div>
      </div>

      {/* Range selector */}
      <div className="mt-6 flex items-center justify-between gap-3">
        <span className="text-sm font-medium text-foreground">Collection overview</span>
        <div className="relative">
          <button
            onClick={() => setRangeOpen((o) => !o)}
            className="flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 text-xs font-medium text-foreground hover:bg-surface-secondary md:px-4 md:text-sm"
          >
            <LuCalendar className="text-base text-primary" />
            <span className="hidden sm:inline">{range}</span>
            <span className="sm:hidden">1-30 Oct 2026</span>
            <LuChevronDown className={`transition-transform ${rangeOpen ? 'rotate-180' : ''}`} />
          </button>

          {rangeOpen && (
            <ul className="absolute right-0 z-10 mt-2 w-72 overflow-hidden rounded-lg border border-border bg-card shadow-lg">
              {RANGES.map((r) => (
                <li key={r}>
                  <button
                    onClick={() => {
                      setRange(r)
                      setRangeOpen(false)
                    }}
                    className={`w-full px-4 py-2.5 text-left text-sm hover:bg-surface ${
                      range === r ? 'font-semibold text-muted' : 'text-foreground'
                    }`}
                  >
                    {r}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Stat cards */}
      <div className="mt-5 grid grid-cols-2 gap-3 md:gap-4 xl:grid-cols-3">
        {STATS.map(({ label, value, note, icon: Icon }) => (
          <div
            key={label}
            className="flex flex-col gap-2 rounded-xl border border-border bg-surface p-4 md:p-5"
          >
            <div className="flex items-start justify-between gap-2">
              <span className="text-xs font-medium text-foreground md:text-sm">{label}</span>
              <Icon className="shrink-0 text-base text-primary md:text-lg" />
            </div>
            <span className="text-3xl font-light text-foreground md:text-4xl">{value}</span>
            <span className="text-[11px] leading-snug text-muted-foreground md:text-xs">{note}</span>
          </div>
        ))}
      </div>

      {/* Continue the collection */}
      <div className="mt-5 rounded-xl bg-secondary p-5 md:mt-6 md:p-6">
        <h2 className="text-xl text-background md:text-2xl">Continue the collection</h2>
        <div className="mt-4 grid grid-cols-1 gap-2.5 sm:flex sm:flex-wrap md:gap-3">
          <button className="flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-secondary hover:bg-primary-hover">
            <LuPlus /> Add Story
          </button>
          <button className="flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-4 py-2.5 text-sm font-medium text-foreground hover:bg-surface">
            <LuMapPin /> Add Place
          </button>
          <button className="flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-4 py-2.5 text-sm font-medium text-foreground hover:bg-surface">
            <LuHourglass /> Add Timeline Event
          </button>
        </div>
      </div>

      {/* Activity + status */}
      <div className="mt-5 grid grid-cols-1 gap-5 md:mt-6 xl:grid-cols-3 xl:gap-6">

        {/* Recent content activity */}
        <section className="rounded-xl border border-border bg-surface p-5 md:p-6 xl:col-span-2">
          <h2 className="text-xl md:text-2xl">Recent content activity</h2>
          <p className="mt-1 text-sm text-muted-foreground">Sample records · Latest editorial changes</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => {
                  setFilter(f)
                  setShowAll(false)
                }}
                className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                  filter === f
                    ? 'bg-secondary text-background'
                    : 'bg-background text-muted-foreground hover:bg-surface-secondary'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <ul className="mt-4 divide-y divide-divider">
            {visibleActivity.map((item) => (
              <li
                key={item.id}
                className="flex flex-col gap-1.5 py-4 sm:flex-row sm:items-start sm:justify-between sm:gap-4"
              >
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-foreground">{item.title}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">{item.meta}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{item.time}</p>
                </div>
                <span
                  className={`inline-flex w-fit shrink-0 items-center gap-1.5 rounded border px-2 py-0.5 text-[11px] font-medium ${STATUS_STYLES[item.status]}`}
                >
                  <span className="h-1 w-1 rounded-full bg-current" />
                  {item.status}
                </span>
              </li>
            ))}
            {visibleActivity.length === 0 && (
              <li className="py-6 text-center text-sm text-muted-foreground">No records match this filter.</li>
            )}
          </ul>

          {filteredActivity.length > 3 && (
            <button
              onClick={() => setShowAll((s) => !s)}
              className="mt-2 flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-foreground hover:bg-surface-secondary"
            >
              <LuArrowRight /> {showAll ? 'Show less' : 'View all stories'}
            </button>
          )}
        </section>

        {/* Collection status */}
        <section className="flex flex-col rounded-xl border border-border bg-surface p-5 md:p-6">
          <h2 className="text-xl md:text-2xl">Collection status</h2>
          <p className="mt-1 text-sm text-muted-foreground">Sample data · 48 story records</p>

          <div className="mt-5 flex flex-col gap-4">
            {STATUS_COUNTS.map((s) => (
              <div key={s.label}>
                <div className="flex justify-between text-sm">
                  <span className="text-foreground">{s.label}</span>
                  <span className="font-semibold text-foreground">{s.value}</span>
                </div>
                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-surface-secondary">
                  <div
                    className={`h-full rounded-full ${s.bar}`}
                    style={{ width: `${(s.value / s.total) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 border-t border-divider pt-5">
            <p className="text-sm font-semibold text-foreground">Editorial attention</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              3 drafts need cover descriptions. 2 audio records await transcript review.
            </p>
            <button className="mt-4 w-full rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-foreground hover:bg-surface-secondary sm:w-auto">
              Review drafts
            </button>
          </div>
        </section>
      </div>

      {/* Stories being discovered */}
      <section className="mt-5 rounded-xl border border-border bg-surface p-5 md:mt-6 md:p-6">
        <p className="text-[11px] font-semibold tracking-[0.18em] text-muted">SAMPLE ANALYTICS · NOT LIVE TRAFFIC</p>
        <h2 className="mt-2 text-xl md:text-2xl">Stories being discovered</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Illustrative reading and listening totals for 1-30 Oct 2026.
        </p>

        <ul className="mt-5 divide-y divide-divider">
          {DISCOVERED.map((d) => (
            <li key={d.title} className="flex items-center gap-4 py-4">
              <img
                src={d.img}
                alt={d.title}
                className="h-14 w-14 shrink-0 rounded-lg object-cover md:h-16 md:w-16"
              />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-foreground md:text-base">{d.title}</p>
                <p className="truncate text-xs text-muted-foreground">{d.source}</p>
                <p className="mt-1 text-xs font-medium text-success">
                  {d.reads} · {d.listens}
                </p>
              </div>
              <LuArrowUpRight className="shrink-0 text-lg text-primary" />
            </li>
          ))}
        </ul>
      </section>

      <footer className="mt-8 border-t border-divider pt-4 text-xs text-muted-foreground">
        KEMETRA · Curatorial workspace · Static design preview. No changes are made to live content.
      </footer>
    </div>
  )
}

export default Overview