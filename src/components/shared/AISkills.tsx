'use client';

import { useEffect, useState } from 'react';
import { getInDemandSkills, type GetInDemandSkillsOutput } from '@/ai/flows/ai-skill-highlighter';
import { Badge } from '@/components/ui/badge';
import { Loader2 } from 'lucide-react';

export default function AISkills() {
  const [skills, setSkills] = useState<GetInDemandSkillsOutput | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSkills() {
      try {
        setLoading(true);
        const inDemandSkills = await getInDemandSkills();
        setSkills(inDemandSkills);
      } catch (error) {
        console.error("Error fetching skills:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchSkills();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center gap-2 text-muted-foreground">
        <Loader2 className="h-5 w-5 animate-spin" />
        <span>Analyzing market trends...</span>
      </div>
    );
  }

  if (!skills || skills.skills.length === 0) {
    return <p>Could not load skills at the moment.</p>;
  }

  return (
    <div className="flex flex-wrap gap-3">
      {skills.skills.map((skill: string) => (
        <Badge key={skill} variant="default" className="text-sm px-4 py-2 bg-primary/20 text-primary border border-primary/50">
          {skill}
        </Badge>
      ))}
    </div>
  );
}
