export const Button=({className="",size="default",children,...props})=>{
// className = ""
// Allows extra Tailwind classes from outside
// Default is empty string

// size = "default"
// Controls button size
// Defaults to "default" if nothing is passed

// children
// Whatever you put between <Button>...</Button>
// Example: text, icons, etc.

// ...props
// Collects all remaining props
// Examples:
// onClick
// type
// disabled
// aria-*
    const baseClasses="relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-blue bg-cyan-blue text-white hover:bg-cyan-blue/90 shadow-lg shadow-cyan-blue/25";
    const sizeClasses={
        sm:"px-4 py-2 text-sm",
        default:"px-6 py-3 text-base",
        lg:"px-8 py-4 text-lg"
    }
    const classes=`${baseClasses} ${sizeClasses[size]} ${className}`;
    return( 
    <button className={classes} {...props}>
        <span className="relative flex items-center justify-center gap-2">{children}</span>
    </button>
    );
}
