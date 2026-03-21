import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Trophy, Target, Zap, ExternalLink, Loader2, Award, BarChart3, Activity, Globe } from 'lucide-react';

interface CompetitiveStatsProps {
  leetcodeUser: string;
  codeforcesUser: string;
}

interface CodeforcesData {
  rating: number;
  maxRating: number;
  rank: string;
  maxRank: string;
  solvedCount: number;
  contribution: number;
  friendOfCount: number;
  registrationTime: number;
  lastOnlineTime: number;
  organization?: string;
  country?: string;
  city?: string;
  contestCount: number;
}

export const CompetitiveStats: React.FC<CompetitiveStatsProps> = ({ leetcodeUser, codeforcesUser }) => {
  const [cfData, setCfData] = useState<CodeforcesData | null>(null);
  const [cfLoading, setCfLoading] = useState(true);
  const [cfError, setCfError] = useState(false);

  useEffect(() => {
    const fetchCodeforcesData = async () => {
      try {
        setCfLoading(true);
        // Fetch user info via proxy
        const infoRes = await fetch(`/api/codeforces/info/${codeforcesUser}`);
        const infoData = await infoRes.json();

        // Fetch user status via proxy
        const statusRes = await fetch(`/api/codeforces/status/${codeforcesUser}`);
        const statusData = await statusRes.json();

        // Fetch user rating history via proxy
        const ratingRes = await fetch(`/api/codeforces/rating/${codeforcesUser}`);
        const ratingData = await ratingRes.json();

        if (infoData.status === 'OK' && statusData.status === 'OK' && ratingData.status === 'OK') {
          const user = infoData.result[0];
          const submissions = statusData.result;
          const ratings = ratingData.result;
          
          // Count unique solved problems
          const solved = new Set();
          submissions.forEach((sub: any) => {
            if (sub.verdict === 'OK') {
              const problemId = `${sub.problem.contestId}-${sub.problem.index}`;
              solved.add(problemId);
            }
          });

          setCfData({
            rating: user.rating || 0,
            maxRating: user.maxRating || 0,
            rank: user.rank || 'unranked',
            maxRank: user.maxRank || 'unranked',
            solvedCount: solved.size,
            contribution: user.contribution || 0,
            friendOfCount: user.friendOfCount || 0,
            registrationTime: user.registrationTimeSeconds || 0,
            lastOnlineTime: user.lastOnlineTimeSeconds || 0,
            organization: user.organization,
            country: user.country,
            city: user.city,
            contestCount: ratings.length
          });
        } else {
          setCfError(true);
        }
      } catch (err) {
        console.error('Error fetching Codeforces data:', err);
        setCfError(true);
      } finally {
        setCfLoading(false);
      }
    };

    fetchCodeforcesData();
  }, [codeforcesUser]);

  // LeetCode Card URL - using a theme that's closer to our dark theme
  const leetcodeCardUrl = `https://leetcard.jacoblin.cool/${leetcodeUser}?theme=dark&font=Inter&ext=activity`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-12 w-full"
    >
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 bg-primary/10 rounded-lg">
          <Trophy className="w-6 h-6 text-primary" />
        </div>
        <h2 className="text-3xl font-bold font-display uppercase tracking-wider">Competitive Intelligence</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* LeetCode Section */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative glass p-6 sm:p-8 rounded-[2rem] overflow-hidden flex flex-col h-full">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-yellow-500/10 rounded-xl">
                  <Target className="w-5 h-5 text-yellow-500" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-display uppercase tracking-wider">LeetCode</h3>
                  <p className="text-[10px] font-mono text-foreground/40 uppercase tracking-widest">Protocol: Algorithms</p>
                </div>
              </div>
              <a 
                href={`https://leetcode.com/${leetcodeUser}`} 
                target="_blank" 
                rel="noreferrer"
                className="p-2 glass rounded-lg hover:bg-primary/10 transition-colors group/link"
              >
                <ExternalLink className="w-4 h-4 text-foreground/40 group-hover/link:text-primary transition-colors" />
              </a>
            </div>
            
            <div className="flex-grow flex items-center justify-center relative">
              {/* Custom styling for the external card to make it blend */}
              <div className="w-full relative">
                <div className="absolute inset-0 bg-primary/5 mix-blend-overlay pointer-events-none rounded-xl"></div>
                <img 
                  src={leetcodeCardUrl} 
                  alt="LeetCode Stats" 
                  className="w-full h-auto rounded-xl shadow-2xl filter contrast-[1.1] brightness-[0.9]"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3">
              {[
                { label: 'Status', value: 'Active', color: 'text-yellow-500' },
                { label: 'Focus', value: 'DP/Graph', color: 'text-yellow-500' },
                { label: 'Tier', value: 'Guardian', color: 'text-yellow-500' }
              ].map((stat) => (
                <div key={stat.label} className="p-3 sm:p-4 glass rounded-2xl text-center border border-white/5">
                  <div className="text-[8px] sm:text-[10px] text-foreground/30 uppercase mb-1 font-mono tracking-widest">{stat.label}</div>
                  <div className={`text-[10px] sm:text-xs font-bold font-mono ${stat.color}`}>{stat.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Codeforces Section */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative glass p-6 sm:p-8 rounded-[2rem] overflow-hidden flex flex-col h-full">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-500/10 rounded-xl">
                  <Zap className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-display uppercase tracking-wider">Codeforces</h3>
                  <p className="text-[10px] font-mono text-foreground/40 uppercase tracking-widest">Core: Competitive</p>
                </div>
              </div>
              <a 
                href={`https://codeforces.com/profile/${codeforcesUser}`} 
                target="_blank" 
                rel="noreferrer"
                className="p-2 glass rounded-lg hover:bg-primary/10 transition-colors group/link"
              >
                <ExternalLink className="w-4 h-4 text-foreground/40 group-hover/link:text-primary transition-colors" />
              </a>
            </div>

            <div className="flex-grow flex flex-col justify-center">
              {cfLoading ? (
                <div className="flex flex-col items-center justify-center py-12 gap-4">
                  <Loader2 className="w-8 h-8 text-primary animate-spin" />
                  <p className="text-xs font-mono text-foreground/40 animate-pulse">SYNCHRONIZING WITH CODEFORCES API...</p>
                </div>
              ) : cfError ? (
                <div className="text-center py-12">
                  <p className="text-xs font-mono text-red-500/60 uppercase tracking-widest">Connection Interrupted</p>
                  <p className="text-[10px] font-mono text-foreground/30 mt-2">FAILED TO RETRIEVE TELEMETRY</p>
                </div>
              ) : cfData ? (
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 sm:p-5 glass rounded-2xl border border-white/5 bg-white/[0.02]">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="p-2 sm:p-3 bg-blue-500/10 rounded-xl">
                        <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                      </div>
                      <div>
                        <div className="text-[8px] sm:text-[10px] font-mono text-foreground/40 uppercase tracking-widest mb-1">Current Rating</div>
                        <div className="text-2xl sm:text-3xl font-bold font-display text-blue-400 tracking-tighter">{cfData.rating}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[8px] sm:text-[10px] font-mono text-foreground/40 uppercase tracking-widest mb-1">Peak</div>
                      <div className="text-xs sm:text-sm font-bold font-mono text-foreground/60">{cfData.maxRating}</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                    {[
                      { label: 'Solved', value: cfData.solvedCount, icon: Activity, color: 'text-primary' },
                      { label: 'Contests', value: cfData.contestCount, icon: Trophy, color: 'text-accent' },
                      { label: 'Friends', value: cfData.friendOfCount, icon: Target, color: 'text-blue-400' },
                      { label: 'Contrib', value: cfData.contribution, icon: Zap, color: 'text-yellow-500' }
                    ].map((stat) => (
                      <div key={stat.label} className="p-3 sm:p-4 glass rounded-xl border border-white/5 bg-white/[0.01] group/stat">
                        <div className="flex items-center gap-2 mb-2">
                          <stat.icon className={`w-3 h-3 ${stat.color} opacity-50`} />
                          <div className="text-[7px] sm:text-[8px] font-mono text-foreground/40 uppercase tracking-widest">{stat.label}</div>
                        </div>
                        <div className="text-base sm:text-lg font-bold font-display tracking-tighter group-hover/stat:text-foreground transition-colors">
                          {stat.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 sm:p-5 glass rounded-2xl border border-white/5 bg-white/[0.02]">
                    <h4 className="text-[8px] sm:text-[10px] font-mono text-foreground/40 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                      <Globe className="w-3 h-3" /> Platform Presence
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 sm:gap-y-4 gap-x-8">
                      <div className="space-y-2 sm:space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-[8px] sm:text-[10px] font-mono text-foreground/30 uppercase">Rank</span>
                          <span className="text-[10px] sm:text-xs font-bold font-mono text-blue-400 uppercase">{cfData.rank}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-[8px] sm:text-[10px] font-mono text-foreground/30 uppercase">Max Rank</span>
                          <span className="text-[10px] sm:text-xs font-bold font-mono text-foreground/60 uppercase">{cfData.maxRank}</span>
                        </div>
                        {cfData.organization && (
                          <div className="flex justify-between items-center">
                            <span className="text-[8px] sm:text-[10px] font-mono text-foreground/30 uppercase">Org</span>
                            <span className="text-[10px] sm:text-xs font-bold font-mono text-foreground/60 truncate max-w-[100px] sm:max-w-[120px]">{cfData.organization}</span>
                          </div>
                        )}
                      </div>
                      <div className="space-y-2 sm:space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-[8px] sm:text-[10px] font-mono text-foreground/30 uppercase">Location</span>
                          <span className="text-[10px] sm:text-xs font-bold font-mono text-foreground/60">
                            {cfData.city ? `${cfData.city}, ` : ''}{cfData.country || 'Unknown'}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-[8px] sm:text-[10px] font-mono text-foreground/30 uppercase">Registered</span>
                          <span className="text-[10px] sm:text-xs font-bold font-mono text-foreground/60">
                            {new Date(cfData.registrationTime * 1000).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-[8px] sm:text-[10px] font-mono text-foreground/30 uppercase">Last Seen</span>
                          <span className="text-[10px] sm:text-xs font-bold font-mono text-foreground/60">
                            {Math.floor((Date.now() / 1000 - cfData.lastOnlineTime) / 86400)}d ago
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
                <span className="text-[10px] font-mono text-foreground/30 uppercase tracking-widest"></span>
              </div>
              <div className="text-[10px] font-mono text-foreground/20 uppercase">
                ID: {codeforcesUser}
              </div>
            </div>
          </div>
        </div>
      </div>

    </motion.div>
  );
};
