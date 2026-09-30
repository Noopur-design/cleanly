// Explicit icon registry so the bundler only ships the icons we actually use
// (avoids pulling the entire lucide-react set via a namespace import).
import {
  Truck, ShieldCheck, Clock, Shirt, Sparkles, Flame, BedDouble, Gem, Footprints,
  Layers, Zap, Wallet, Leaf, CalendarClock, WashingMachine, ShoppingBag, Search,
  Instagram, Facebook, MessageCircle, Youtube, Linkedin, Percent, Users, Gift,
  GraduationCap, Snowflake, Repeat, BadgeCheck, Star, Heart, Phone, Mail, Target,
  Eye, Copy, CalendarCheck, Settings, Ban, ShieldAlert, XCircle, Copyright,
  RefreshCw, Scale, Database, Cookie, Baby, Link2, Lock, UserCheck, FileText,
  MapPin, HelpCircle, Handshake, UserPlus, Tag, Circle,
} from 'lucide-react'

const registry = {
  Truck, ShieldCheck, Clock, Shirt, Sparkles, Flame, BedDouble, Gem, Footprints,
  Layers, Zap, Wallet, Leaf, CalendarClock, WashingMachine, ShoppingBag, Search,
  Instagram, Facebook, MessageCircle, Youtube, Linkedin, Percent, Users, Gift,
  GraduationCap, Snowflake, Repeat, BadgeCheck, Star, Heart, Phone, Mail, Target,
  Eye, Copy, CalendarCheck, Settings, Ban, ShieldAlert, XCircle, Copyright,
  RefreshCw, Scale, Database, Cookie, Baby, Link2, Lock, UserCheck, FileText,
  MapPin, HelpCircle, Handshake, UserPlus, Tag,
}

// Renders a lucide icon by its string name (from data files).
export default function Icon({ name, className = 'h-5 w-5', ...rest }) {
  const Cmp = registry[name] || Circle
  return <Cmp className={className} strokeWidth={2} {...rest} />
}
