/**
 * Plugin configuration builder
 */
export declare class ConfigBuilder {
    globalResources: any[];
    noWavesAttach: boolean;
    useGlobalResources: boolean;
    useScrollfirePatch: boolean;
    useAll(): ConfigBuilder;
    useAutoComplete(): ConfigBuilder;
    useBadge(): ConfigBuilder;
    useBox(): ConfigBuilder;
    useBreadcrumbs(): ConfigBuilder;
    useButton(): ConfigBuilder;
    useCarousel(): ConfigBuilder;
    useCharacterCounter(): ConfigBuilder;
    useCard(): ConfigBuilder;
    useCheckbox(): ConfigBuilder;
    useChip(): ConfigBuilder;
    /**
     * Use my control
     */
    useClickCounter(): ConfigBuilder;
    useCollapsible(): ConfigBuilder;
    useCollection(): ConfigBuilder;
    useColors(): ConfigBuilder;
    useDatePicker(): ConfigBuilder;
    useDropdown(): ConfigBuilder;
    useFab(): ConfigBuilder;
    useFile(): ConfigBuilder;
    useFooter(): ConfigBuilder;
    useInput(): ConfigBuilder;
    useModal(): ConfigBuilder;
    useNavbar(): ConfigBuilder;
    usePagination(): ConfigBuilder;
    useParallax(): ConfigBuilder;
    useProgress(): ConfigBuilder;
    usePushpin(): ConfigBuilder;
    useRadio(): ConfigBuilder;
    useRange(): ConfigBuilder;
    useScrollfire(): ConfigBuilder;
    useScrollSpy(): ConfigBuilder;
    useSelect(): ConfigBuilder;
    useSidenav(): ConfigBuilder;
    useSlider(): ConfigBuilder;
    useSwitch(): ConfigBuilder;
    /**
     * Use materialized tabs
     */
    useTabs(): ConfigBuilder;
    useTapTarget(): ConfigBuilder;
    useTimePicker(): ConfigBuilder;
    useTooltip(): ConfigBuilder;
    useTransitions(): ConfigBuilder;
    /**
     * Use ripple/waves effect
     */
    useWaves(): ConfigBuilder;
    useWell(): ConfigBuilder;
    preventWavesAttach(): ConfigBuilder;
    /**
     * Don't globalize any resources
     * Allows you to import yourself via <require></require>
     */
    withoutGlobalResources(): ConfigBuilder;
    withScrollfirePatch(): ConfigBuilder;
}
