interface generateSlotsArgs {
    date: string;
    startingTime: string;
    endingTime: string;
    duration: number;
}
export declare const generateSlots: ({ date, startingTime, endingTime, duration }: generateSlotsArgs) => {
    startSlot: Date;
    endSlot: Date;
}[];
export declare const DateTimeFormatter: (date: string, time: string) => Date;
export declare const readableTimeFormate: (date: Date) => string;
export {};
//# sourceMappingURL=generateSlots.d.ts.map